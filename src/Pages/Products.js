import React, { useContext, useEffect,useState, useRef} from 'react';
import { Grid,Transition } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import {AuthContext} from '../util/auth'
import {FETCH_PRODUCTS} from '../util/graphql'
import ProductItems from '../components/ProductItems'
import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
width: 50%;

`
const Filter = styled.div`
padding: 5px;
display:flex;
`
const FilterText = styled.h3`
font-size: 30px;
font-weight: 100;
margin-right: 10px;
`
const Select =  styled.select``
const Option = styled.option``


function Products(){
  const {user} = useContext(AuthContext);
  const {loading,data} = useQuery(FETCH_PRODUCTS)
  const [filters, setFilters] = useState({})
  const [filteredProducts, setFilteredProducts] = useState([])

  

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
                             <Option disabled>Gender</Option>
                             <Option>Men</Option>
                             <Option>Women</Option>
                             <Option>Unisex</Option>
                         </Select>
                     </Filter>
                     <Filter >
                         
                         <Select name='Type' onChange={handleFilters}>
                             <Option disabled>Type</Option>
                             <Option>Jacket</Option>
                             <Option>T-shirt</Option>
                             <Option>Official</Option>
                         </Select>
                     </Filter>
                </FilterContainer>
            </Grid.Row>
            <Grid.Row className="page-title">
                 Trending Now
            </Grid.Row>
            <Grid.Row>
                 {loading?(<h1>Loading Products...</h1>):(<ProductItems  products={data.getProducts} filters={filters}/>)}
            </Grid.Row>
        </Grid>
    </div>
        
    )
                
}
export default Products;

