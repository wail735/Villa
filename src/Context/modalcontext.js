// Context/modalcontext.js
import { createContext } from "react";

export const modalcontext = createContext({
  openModal: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

export const modalcontextUpdate = createContext({
  openModalUpdate: false,
  handleOpenModalUpdate: () => {},
  handleCloseModalUpdate: () => {},
});

export const modalContextDelete = createContext({
  openModalDelete :false,
  handleOpenModalDelete:()=>{},
  handleCloseModalDelete:()=>{},
});