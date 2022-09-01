import React, { useState} from 'react';
import { Grid } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
//import {AuthContext} from '../util/auth'
import {FETCH_PRODUCTS} from '../util/graphql'
import ProductItems from '../components/ProductItems'
import styled from 'styled-components'
import {mobile} from '../util/responsive'


const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
width: 50%;
${mobile({width: '30%'})}
`
const Filter = styled.div`
padding: 5px;
display:flex;
`
const FilterText = styled.h3`
font-size: 30px;
font-weight: 100;
margin-right: 10px;
${mobile({fontSize:'16px'})}
`
const Select =  styled.select``
const Option = styled.option`

font-size: 20px
`
function Products(){
  
  const {loading,data} = useQuery(FETCH_PRODUCTS)
  const [filters, setFilters] = useState({})
  

  

 function handleFilters(e){
    setFilters({
        ...filters,
        [e.target.name]:e.target.value})
        console.log(filters)
 }
 
 
    return(
        <div className='product-page'>
            <Grid columns={window.innerWidth < 600 ? (2) : (3)} divided>
            <Grid.Row className="page-title">
                <FilterContainer>
                     <Filter name='Gender'>
                         <FilterText>Filters:</FilterText>
                         <Select name='Genders' onChange={handleFilters}>
                         <optgroup label="Genders" style={{fontWeight:"bold"}}>
                             <Option>Men</Option>
                             <Option>Women</Option>
                             <Option>Unisex</Option>
                        </optgroup>
                         </Select>
                     </Filter>
                     <Filter >
                         
                         <Select name='Type' onChange={handleFilters}>
                         <optgroup label="Type" style={{fontWeight:"bold"}}>
                                <Option>Jacket</Option>
                             <Option>T-shirt</Option>
                             <Option>Official</Option>
                             </optgroup>
                         </Select>
                     </Filter>
                </FilterContainer>
            </Grid.Row>
            <Grid.Row className="page-title">
                 Trending Now
            </Grid.Row>
            <Grid.Row>
                 {loading?(<h1  style={{textAlign:"center"}}>Loading Products...</h1>):(<ProductItems  products={data.getProducts} filters={filters}/>)}
            </Grid.Row>
        </Grid>
    </div>
        
    )
                
}
export default Products;

