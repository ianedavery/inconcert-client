import React from 'react';

export default class RenderIngredient extends React.Component {

    render() {
        return (
            <div className='add-ingredients-container'>
                    {fields.map((ingredient, index) => (
                            <div key={index} className='ingredients-container'>
                                <div>
                                    <label>Ingredient {index + 1}</label>
                                    <Field name={`${ingredient}.ingredient`} type='text' component='input' />
                                </div>
                                <div>
                                    <label className='measurement-label'>Measurement {index + 1}</label>
                                    <Field name={`${ingredient}.measurement`} type='text' component='input' />
                                </div>
                                <div>
                                    <button onClick={() => fields.remove(index)}>-</button>
                                </div>
                            </div>
                        )
                    )}
                <div>
                    <button type='button' onClick={() => fields.push()}>+</button>
                </div>
            </div>
        );
    }
}