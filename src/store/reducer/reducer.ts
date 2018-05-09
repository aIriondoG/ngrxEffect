//Implementaciones de @ngrx necesarias
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
//Implementacion de acciones
import * as ac from '../action/action';
//Implementacion de cosa
export interface user {
    id?: string;
    username: string;
    password: string;
}
//Definicion de la identidad de cosa
export interface State extends EntityState<user> {
    selectedCosaId: string | null;
}
//Adaptador de identidad
export const adapter: EntityAdapter<user> = createEntityAdapter<user>();
//Estado inicial de la identidad
export const estadoInicial: State = adapter.getInitialState({
    selectedCosaId: null
});
//Reductor
export function reducer(
    state = estadoInicial,
    action: ac.All
): State {
    switch (action.type) {
        case ac.LOGIN_SUCCESS: {
            return adapter.addOne(action.payload.User, state);
        }
        /*case ac.LOGIN_FAILED: {
             return adapter.removeOne(action.payload.id, state);
        }*/
        case ac.LOGOUT_SUCCESS: {
            return adapter.removeOne(action.payload, state);
        }
        case ac.UPDATE_SUCCESS: {
            return adapter.updateOne(action.payload.User , state);
        }
        /*case ac.LOGOUT_FAILED: {
            return adapter.addMany(action.payload, state);
        }*/
        default:
            return state;
    }
}
//Estado
export const selectCosaState = createFeatureSelector<State>('cosaStore');
//Selectores de datos
export const {

    // select the array of stuff ids
    selectIds: selectCosaIds,
    // select the dictionary of stuff entities
    selectEntities: selectCosaEntities,
    // select the array of stuff
    selectAll: selectAllCosas,
    // select the total stuff count
    selectTotal: selectCosaTotal

} = adapter.getSelectors(selectCosaState)
