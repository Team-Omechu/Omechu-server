import {recommendMenu } from "../repositories/menu.repository.js";

export const recommendMenuService= async (choice) => {
    const menu = await recommendMenu(choice);   
    if (!menu) {
        console.error("No menu recommendation found in service");
        return null;
    }  
    return menu;
}