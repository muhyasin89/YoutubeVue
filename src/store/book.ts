import { defineStore } from "pinia";
import { ref } from "vue";
import { DeleteRecord } from "../service/deleteRecord";
import { GetListRecord } from "../service/getListRecord";
import { PostDetailRecord } from "../service/postRecord";
import { PutDetailRecord } from "../service/putRecord";
import { book, formBook } from "../types/book";


export const useBookStore = defineStore("book", () => {
  const bookData = ref<any>([]);
  const bookMsg = ref("");
  const bookLoaded = ref(false);
  const bookLoadedApi =ref(false);
  const activeId = ref(0);

  const fetchBook = async () => {
    let url = "books/";
    const result = await GetListRecord(url)
    bookData.value = result.items;
    bookMsg.value = result.msg;
    bookLoaded.value = result.loaded;
  };


  const getBookList = () => {
    if(bookLoadedApi.value === false){
        fetchBook()
    }else{
        return bookData.value;
    }
  }

  const getBookId = () => {
    // get id from list not api
  }

  const addBook = async (data: formBook) => {
    let url = "books/"
    const result = await PostDetailRecord(url, data);

    updateList("add", result.item);
  }

  const updateBookId = async (data: formBook) => {
    let url = "book/"+ activeId.value+"/update/";

    const result = await PutDetailRecord(url, activeId.value);
    updateList("update", result.item);
  }

  const deleteBookId = async () => {
    let url = "book/"+ activeId.value+"/update/";

    const result = await DeleteRecord(url, activeId.value);
    updateList("delete", null);
  }

  const changeActiveId = (id: number) =>{
    activeId.value = id;
  }


  // utility for this function only
  const updateList = (mode: string, data: formBook) => {
    if(mode=="add"){
        // append data to bookData
        bookData.value.append(data)
    }else if(mode == "edit"){
        // change data in bookData at index
        const index = getIndexInList()

        bookData.value[index].title = data.title
        bookData.value[index].author = data.author
        bookData.value[index].description = data.description
        
        //after done reset activeId
        resetActiveId()
    }else if(mode == "delete"){
        // remove data in bookData at index
        const index = getIndexInList()

        bookData.value.splice(index, 1);
        //after done reset activeId
        resetActiveId()
    }
  }

  const resetActiveId = () => {
    activeId.value = 0;
  }

  const getIndexInList = () => {
    return bookData.value.findIndex((p:book) => p.id === activeId.value);
  }

  return { bookData, activeId, bookMsg, bookLoaded, addBook,  getBookList, getBookId, changeActiveId, updateBookId, deleteBookId };
});
