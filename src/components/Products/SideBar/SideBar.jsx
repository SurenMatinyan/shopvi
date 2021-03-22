import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';
import queryString from 'query-string';

const SideBar = (props) => {
    const [cat, setCat] = useState(null)
    const [ priceMin, setMin ] = useState(null)
    const [ priceMax, setMax ] = useState(null)
    const sub = (val) => {
        setCat(val);
        setMin("");
        setMax("");
    }
    let obj = {}
    priceMin && (obj.priceMin = priceMin);
    priceMax && ( obj.priceMax = priceMax );
    cat && ( obj.cat = cat )
    let urlPars = queryString.stringify(obj)
    const submit = () => {
        props.history.push( { search: urlPars} )
        setCat(null);

    }
    let n = [];
    let find = props.match.params.type;
    find === "man" && (find = props.category.forMen);
    find === "woman" && (find =props.category.forWoman);
    find === "children" && (find =props.category.forChildren)
    console.log(find)
    return(
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.category}>
                    <h1>CATEGORY</h1>
                    {find.map(el => <NavLink   className={classes.caty} to={{ search: `cat=${el}`}}>
                        <div onClick={()=> {sub(el)} } className={classes.catDiv}>{el}</div>
                        </NavLink>)}
                    <NavLink   className={classes.caty} to={{ search: `cat=asd`}}><div onClick={()=> {sub("asd")} } className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={{ search: `cat=dd`}}><div onClick={()=> {sub("dd")} }  className={classes.catDiv}>Պայուսակներ</div></NavLink>
                    <NavLink   className={classes.caty} to={{ search: `cat=attsd`}}><div onClick={()=> {sub("attsd")} } className={classes.catDiv}>Պայուսակներ</div></NavLink>

                    
                    
                       
                </div>

                <h1>price</h1>
                <div className={classes.priceInput}>
                    
                        <input value={priceMin} onChange={ e => { setMin(e.target.value) } }  type="number" placeholder="min"/> - 
                         <input value={priceMax} onChange={ e => { setMax(e.target.value) } }  type="number" placeholder="max"/>
                        <button onClick={ submit }>SET</button>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default SideBar;