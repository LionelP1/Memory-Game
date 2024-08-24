import { useState } from "react";
import uniqid from "uniqid";
import { API_TOKEN } from './config';

const getCard = async (cardId) => {
    try {
      const url = `https://api.clashroyale.com/v1/cards/${cardId}`;
      
      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`, 
        },
      });
      const data = await res.json();
      
      const { name, iconUrls } = data;
      const image = iconUrls;
  
      return { name, image, cardId };
    } catch (error) {
      console.error('Error fetching card information:', error);
      throw error;
    }
};