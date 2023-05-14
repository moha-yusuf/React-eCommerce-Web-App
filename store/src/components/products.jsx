import React, { Component } from 'react';
import ProductCards from './productCards';
import Pagination from "./common/pagination";
import SearchBox from './searchBox'
import ListGroup from './common/listGroup';
import Select from './common/select';
import { getCategories } from '../services/catergoryService';
import { getProducts } from '../services/productService';
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Products extends Component {
    state = {
        products: [],
        categories: [],
        currentPage: 1,
        pageSize: 12,
        selectedCategory: null,
        searchQuery: "",
        sortProduct: { path: "name", order: "asc" },
        sortOptions: [
            {id: 1, name: "alphapetic", path: "name", order: "asc" }, 
            {id: 2, name: "price low to high", path: "price", order: "asc"},
            {id: 3, name: "price high to low", path: "price", order: "desc"}
        ]
    };

    async componentDidMount() {
        const { data } = await getCategories();
        const categories = [{ id: "", name: "All"}, ...data];
        const selectedCategory = categories[0];
        const { data: products } = await getProducts();
        this.setState({ 
            categories, 
            products, 
            selectedCategory,
        });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    
    handleCategorySelect = category => {
        this.setState({ selectedCategory: category, searchQuery: "", currentPage: 1});
    }

    handleSearch = query => {
        const categories = this.state.categories;
        this.setState({ searchQuery: query, selectedCategory: categories[0],currentPage: 1 });
    };

    handleSortChange = (event) => {
        const optionValue = parseInt(event.target.value);
        const sortOption = this.state.sortOptions.find(option => option.id === optionValue);
        const sortProduct = this.state.sortProduct;
        sortProduct.path = sortOption.path;
        sortProduct.order = sortOption.order;
        this.setState({ sortProduct });
    };

    render() {                         
        const { 
            pageSize,
            currentPage,
            selectedCategory,
            categories,
            products,
            searchQuery,
            sortOptions,
            sortProduct
        } = this.state;

        let filteredProducts = products;
        if (searchQuery) {
            filteredProducts = products.filter(p => p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        } else if (selectedCategory && selectedCategory.id) {
            filteredProducts = products.filter(p => p.category.id === selectedCategory.id);
        }

        const sortedProducts = _.orderBy(filteredProducts, [sortProduct.path], [sortProduct.order]);

        const productsFinal = paginate(sortedProducts, currentPage, pageSize);

        const totalCount = filteredProducts.length;

        return (
            <div className="container py-5">
                <div className="row pl-0 g-4 g-md-4 g-lg-3">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3" >
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        <ListGroup
                            items={categories}
                            selectedItem={selectedCategory}
                            onItemSelect={this.handleCategorySelect}
                        />
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-between">
                            <p className='p-2 bg-white'> {totalCount} items in store </p>
                            <div className='d-inline-flex'>
                                <span className='p-2'>Sort By </span>
                                <Select onChange={this.handleSortChange} options={sortOptions}
                                />
                            </div>
                        </div>
                        <ProductCards products={productsFinal}/>
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;