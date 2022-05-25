package com.dl.users;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Product {
    // region 0 Constants
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment id
    private Integer id;
    private String productItem;
    private String productDescription;
    private String productDetails;

    // region 1 Constructor
    public Product(){

    }
    /*public Product(Integer intProductID, String strProductItem, String strProductDescription, String strProductDetails) {
        this.id = intProductID;
        this.strProductItem = strProductItem;
        this.strProductDescription = strProductDescription;
        this.strProductDetails = strProductDetails;
    }
    */
    // region 2 Getters and Setters

    public Integer getId() {
        return id;
    }
    public String getProductItem() {
        return productItem;
    }
    public String getProductDescription() {
        return productDescription;
    }
    public String getProductDetails() {
        return productDetails;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public void setProductItem(String productItem) {
        this.productItem = productItem;
    }
    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
    public void setProductDetails(String productDetails) {
        this.productDetails = productDetails;
    }

    //region 3. toString
    @Override
    public String toString() {
        return "Product{" +
                "intProductID='" + id+ '\'' +
                ", strProductItem='" + productItem + '\'' +
                ", strProductDescription='" + productDescription + '\'' +
                ", strProductDetails='" + productDetails + '\'' +
                '}';
    }

}
