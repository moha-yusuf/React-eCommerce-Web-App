import React from 'react';

const AboutPage = () => {
    return (
        <div className="container py-5">
            <div className="bg-white rounded p-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-5">About Our Store</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2 className="text-center mb-3">Our Story</h2>
                        <p>Our store was founded in 2010 with the goal of providing stylish and affordable clothing options for women, men, and children. Since then, we've expanded our product offerings and grown our customer base, but our commitment to quality and customer service has remained the same.</p>
                        <p>Whether you're looking for the latest fashion trends or timeless classics, we have something for everyone. Our selection includes a range of styles, sizes, and price points, so you can find the perfect outfit for any occasion.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2 className="text-center mb-3">Our Team</h2>
                        <p>Our team is made up of passionate and knowledgeable individuals who are dedicated to helping you find the perfect outfit. From our customer service representatives to our fashion experts, we're here to answer your questions and provide you with the best possible shopping experience.</p>
                        <p>At our store, we believe that everyone deserves to feel confident and stylish, and we're committed to helping you achieve that goal. So whether you're shopping for yourself or for someone else, we're here to make your experience as enjoyable and stress-free as possible.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-3">Our Products</h2>
                        <p>We offer a wide range of clothing and accessories for women, men, and children, including:</p>
                        <ul>
                            <li>Women's dresses, tops, and pants</li>
                            <li>Men's shirts, pants, and outerwear</li>
                            <li>Children's clothing for all ages</li>
                            <li>Accessories such as bags, hats, and jewelry</li>
                        </ul>
                        <p>Our products are sourced from top brands and designers, so you can trust that you're getting the best quality and style. We also offer frequent sales and discounts, so you can get the looks you love at prices you'll love even more.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-3">Our Store Locations</h2>
                        <p>We currently have locations in New York City, Los Angeles, and Chicago. Visit us in-store to see our full selection and get personalized styling advice from our fashion experts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="https://source.unsplash.com/400x400/?fashion,woman" alt="Woman in fashionable clothes" className="img-fluid rounded"/>
                        <h3 className="mt-3 mb-2">Women's Clothing</h3>
                        <p>Shop our collection of stylish and affordable women's clothing, including dresses, tops, pants, and more.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img src="https://source.unsplash.com/400x400/?fashion,men" alt="Man in fashionable clothes" className="img-fluid rounded"/>
                        <h3 className="mt-3 mb-2">Men's Clothing</h3>
                        <p>Find the latest trends and timeless classics in our men's clothing collection, including shirts, pants, and outerwear.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img src="https://source.unsplash.com/400x400/?fashion,kid" alt="Children in fashionable clothes" className="img-fluid rounded"/>
                        <h3 className="mt-3 mb-2">Children's Clothing</h3>
                        <p>From newborns to teens, we have clothing options for children of all ages, including tops, bottoms, and outerwear.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;