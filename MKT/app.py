# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import pandas as pd
import streamlit as st
import plotly.express as px
from PIL import Image
import qgrid
from st_aggrid import AgGrid, GridUpdateMode
from st_aggrid.grid_options_builder import GridOptionsBuilder
import requests
#from stvis import pv_static
from datetime import datetime
#import webbrowser

st.set_page_config(page_title='MKT Channel Results')
st.header('Leads Model T10-2021')
st.subheader('Conversion')


#st.dataframe(df)

# get token
r1 = requests.get('http://localhost:8091/api/authapi')
x1 = r1.json()
token = x1[0]['Token']



def grid_table(df):
        gb = GridOptionsBuilder.from_dataframe(df)
        gb.configure_pagination(enabled=True)
        gb.configure_side_bar()
        #gb.configure_selection('multiple', use_checkbox=True, groupSelectsChildren=True, groupSelectsFiltered=True)
        gb.configure_default_column(groupable=True, value=True, enableRowGroup=True, editable=True)
        gridOptions = gb.build()
        grid_response = AgGrid(df, 
                    gridOptions = gridOptions, 
                    enable_enterprise_modules = True,
                    fit_columns_on_grid_load = False,
                    width='100%',
                    theme = "streamlit", #['streamlit', 'light', 'dark', 'blue', 'fresh', 'material']
                    update_mode = GridUpdateMode.SELECTION_CHANGED,
                    allow_unsafe_jscode=True)
        df = grid_response['data']
        #pv_static(df)
        selected_rows = grid_response["selected_rows"]
        #st.download_button('Download',data=pd.DataFrame.to_csv(df,index=False), mime='text/csv', key =2)
        return grid_response['data'], selected_rows

def main():
    ### --- LOAD DF
    #excel = 'E:/Tuyen/CapstoneProject/MKT_test/Survey_Results.xlsx'
    #sheet_name = 'DATA'
    
    
    ############ DASHBOARD
    channels = df['Channel'].unique().tolist()
    scores = df['Score'].unique().tolist()
    #status = df['STATUS_CUSTOMER'].unique().tolist()
    #packages = df['PackageType'].unique().tolist()

    ############ DASHBOARD
    #channels = df['Channel'].unique().tolist()
    #scores = df['Score'].unique().tolist()
    #status = df['STATUS_CUSTOMER'].unique().tolist()
    #packages = df['PackageType'].unique().tolist()
    
    st.sidebar.header('Filtering')
    st.sidebar.subheader('Channel:')
    channel_selection= st.sidebar.multiselect('Pick a channel',
                                         channels,
                                         default=channels)
    st.sidebar.subheader('Score:')
    score_selection = st.sidebar.slider('Constraint the score',
                              min_value = min(scores),
                              max_value = max(scores),
                              value = (min(scores),max(scores)))
    #col1, col2 = st.columns(2)
    #status_selection = st.multiselect('Status: ', status, default=status)
    #package_selection = st.multiselect('Package Type:', packages, default=packages)
    
    ## FILTER DATAFRAME BASED ON SELECTION
    
    mask = (df['Score'].between(*score_selection)) & (df['Channel'].isin(channel_selection))
    number_of_result = df[mask].shape[0]
    st.markdown(f'Available results: {number_of_result}')
    
    
    
    #st.dataframe(df[mask])
    #df_test = AgGrid(df[mask])
    #number_of_result1 = df_test['data'].iloc[df_test['selected_rows'],:].shape[0]
    #st.markdown(f'Available results: {number_of_result1}')
    #st.download_button('Download file',data=pd.DataFrame.to_csv(df[mask],index=False), mime='text/csv',key=1)
    
    
    grid_table(df[mask])
    
    st.download_button('Download file',data=pd.DataFrame.to_csv(df[mask],index=False), mime='text/csv',key=1)
    
    ## GROUP DATAFRAME AFTER SELECTION
    df_grouped1 = df[mask].groupby(by=['REGION']).count()[['CIF']]
    #df_grouped = df_grouped.rename(columns={'Score':'CIFs'})
    df_grouped1 = df_grouped1.reset_index()
    bar_chart = px.bar(df_grouped1, 
                       x='REGION', 
                       y='CIF', 
                       #text='Votes',
                       color_discrete_sequence=['#F63366']*len(df_grouped1),
                       template='plotly_white')
    st.plotly_chart(bar_chart)
    
    
    df_grouped2 = df[mask].groupby(by=['STATUS_CUSTOMER']).count()[['CIF']]
    
    df_grouped2 = df_grouped2.reset_index()
    
    pie_chart = px.pie(df_grouped2,
                       title='STATUS CUSTOMER ',
                       values = 'CIF',
                       names='STATUS_CUSTOMER')
    
    
    st.plotly_chart(pie_chart)

def close_session():
    datetime2 = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    requests.post('http://localhost:8091/api/authapi',data={
        "generated_at": datetime2, 
        "token": "null"
    })
    
        

if token == ':=Y:E7b:d];b$4Z':
    #print('valid token')
    r = requests.get('http://localhost:8091/api/mkt')
    x = r.json()
    df = pd.DataFrame(x)
    main()
    #st.button('Close session', on_click=close_session())
    if st.button('Close session'):
        close_session()
        #webbrowser.open('http://localhost:8501/')
        #token=requests.get('http://localhost:8501/').json()[0]['Token']
    
else:
    print('invalid token')