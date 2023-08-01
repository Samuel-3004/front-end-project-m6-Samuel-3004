import React, { useContext, useState } from "react";
import { StyledModalEdit } from "./modalEditarStyled";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { userContext } from "../../providers/contacts/contactContext";
import { TContactRequest } from "../../providers/contacts/types.contacts";
import { UserListContext } from "../../providers/clients/userContext";

const ModalEditcontacts = () => {
  const {
    contactFounded,
    editContact,
    deleteContact,
    handleToCloseEd,
    openEd,
    contactsUser,
  } = useContext(userContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactRequest>({});

  const submit: SubmitHandler<TContactRequest> = (formData) => {
    editContact(formData);
    reset();
  };

  const btnDelete = () => {
    deleteContact();
    handleToCloseEd();
  };
  

  return (
    <StyledModalEdit open={openEd}>
      <div className="container-modal">
        <div className="header-register">
          <h3>Contato Detalhes</h3>
          <p onClick={handleToCloseEd}>X</p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <section className="name-contact">
            <label htmlFor="name">Nome</label>
            <input
              {...register("name", {value: contactFounded?.name})}
              type="text"
              id="name"
              defaultValue={contactFounded?.name}
              className="contact-title"
            />
          </section>
          <section className="name-contact">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {value: contactFounded?.email})}
              type="email"
              id="email"
              defaultValue={contactFounded?.email}
              className="contact-title"
            />
          </section>
          <section className="name-contact">
            <label htmlFor="telefone">Telefone</label>
            <input
              {...register("telefone", {value: contactFounded?.telefone})}
              type="text"
              id="telefone"
              defaultValue={contactFounded?.telefone}
              className="contact-title"
            />
          </section>

          <div className="btns">
            <button type="submit" className="btn-salve">
              Salvar Alterações
            </button>

            <button type="button" onClick={btnDelete} className="btn-excluir">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledModalEdit>
  );
};

export default ModalEditcontacts;
