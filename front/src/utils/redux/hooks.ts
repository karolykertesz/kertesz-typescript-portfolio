import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../store/init";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
