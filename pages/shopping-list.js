import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import utils from '../utils';
import styles from './shopping-list.module.css';

export default function ShoppingListPage({
    handleAddToShoppingList,
    handleRemoveFromShoppingList,
}) {
    return (
        <>
            <h2>Shopping List</h2>
            <ShoppingList
                handleAddToShoppingList={handleAddToShoppingList}
                handleRemoveFromShoppingList={handleRemoveFromShoppingList}
            />
        </>
    );
}
