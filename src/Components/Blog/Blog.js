import React from 'react';

const Blog = () => {
    return (
        <div>
           <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Optimizing performance in a React application
  </div>
  <div class="collapse-content"> 
    <p>1.Keeping component state local where necessary.<br></br>
2.Memoizing React components to prevent unnecessary re-renders.<br></br>
3.Code-splitting in React using dynamic import<br></br>
4.Windowing or list virtualization in React.<br></br>
5.Lazy loading images in React.</p>
  </div>
</div><br />

<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div class="collapse-content"> 
    <p>1.Local state.<br></br>
2.Global state.<br></br>
3.Server state.<br></br>
4.URL state.</p>
  </div>
</div><br></br>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div class="collapse-content"> 
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
  </div>
</div><br></br>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
  </div>
  <div class="collapse-content"> 
    <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
  </div>
</div><br></br>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
  </div>
  <div class="collapse-content"> 
    <p>All your products are listed in the Products area in Shopify. 50 products are listed on each page. To organize the list of products, and to find products in a list that spans many pages, you can sort, search, and filter the list.

By default, your product list is sorted alphabetically (from A to Z) by product name.

The way that your products are sorted or filtered in the Products area of the admin doesn't affect how your products are shown in your online store. If you need to change the way that your products appear to customers in your online store, then change the sort order for the products in a collection.</p>
  </div>
</div><br></br>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is a unit test? Why should write unit tests?
  </div>
  <div class="collapse-content"> 
    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
  </div>
</div>
        </div>
    );
};

export default Blog;