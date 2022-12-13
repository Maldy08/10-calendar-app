import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  const setActiveEvent = ( calendarEvent) => {

    dispatch( onSetActiveEvent( calendarEvent ) );
  }

  const startSavingEvent = async( calendarEvent ) => {
    //Todo: llegar al backend

    //Todo bien
    if( calendarEvent._id){
        //Actualizando
    }else{
       dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
  }

  const startDeletingEvent = () => {
    //Todo: Llegar al backEnd
    dispatch( onDeleteEvent() );
  }
   
  return {
    //*Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //*Eventos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  }
}
