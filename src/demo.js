import React from 'react';
import Generator, {defaultSettings}  from './components/fr-generator';
import Cascade from './components/cascade'
const defaultValue = {
    schema: {
        type: 'object',
        properties: {
            inputName: {
                title: '简单输入框',
                type: 'string',
            },
        },
    },
    displayType: 'row',
    showDescIcon: true,
    labelWidth: 120,
};
const templates = [
    {
        text: '模板1',
        name: 'something',
        schema: {
            title: '对象',
            description: '这是一个对象类型',
            type: 'object',
            properties: {
                inputName: {
                    title: '简单输入框',
                    type: 'string',
                },
                selectName: {
                    title: '单选',
                    type: 'string',
                    enum: ['a', 'b', 'c'],
                    enumNames: ['早', '中', '晚'],
                },
                dateName: {
                    title: '时间选择',
                    type: 'string',
                    format: 'date',
                },
            },
        },
    },
];
const setting = defaultSettings
setting.push({
    title:'自定义组件',
    widgets:[
        {
            name:'Cascade',
            text:'级联选择器',
            schema:{description: "级联选择器",title:'级联选择器',"ui:widget": "Cascade",type:'select'}
        },
        {
            name:'Date',
            text:'日期选择器',
            schema:{description: "日期选择器",title:'日期选择器',type:'date',"ui:widget": "date",format:'date'}
        },
        {
            name:'DateTime',
            text:'日期时间选择器',
            schema:{description: "日期时间选择器",title:'日期时间选择器',type:'datetime',"ui:widget": "date",format:'dateTime'}
        },
        {
            name:'time',
            text:'时间选择器',
            schema:{description: "时间选择器",title:'时间选择器',type:'time',"ui:widget": "date",format:'time'}
        },
        {
            name:'year',
            text:'年份选择器',
            schema:{description: "年份选择器",title:'年份选择器',type:'year',"ui:widget": "year",format:'year'}
        },
            ],
    widget: 'Cascade',
    setting: {
        api: { title: 'api', type: 'string' }
        },
})
console.log(setting)
const Demo = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Generator defaultValue={defaultValue} templates={templates} settings={setting} widgets={{Cascade}} />
        </div>
    );
};
export default Demo;
