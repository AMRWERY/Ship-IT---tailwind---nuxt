import { defineStore } from 'pinia'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useMyTodayDealStoreStore = defineStore('today-deal', {
  state: () => ({
    deals: [],
  }),
  actions: {
    // async addNewDeal(data) {
    //   const colRef = collection(db, "todayDeal");
    //   const docRef = await addDoc(colRef, data);
    //   console.log("Document was created with ID:", docRef.id);
    // },
    
    async fetchDeals() {
      try {
        const querySnap = await getDocs(query(collection(db, "todayDeal")));
        let deals = [];
        const today = new Date();
        querySnap.forEach((doc) => {
          const dealData = doc.data();
          const startDate = dealData.startDate.toDate();
          const endDate = dealData.endDate.toDate();
          if (startDate <= today && today <= endDate) {
            let deal = {
              id: doc.id,
              ...dealData,
              endDate: endDate,
            };
            deals.push(deal);
          }
        });
        this.setDeals(deals);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    },

    setDeals(deals) {
      this.deals = deals;
    },
  },

  getters: {
    getAllDeals(state) {
      return state.deals;
    },
  },
})
