type FormState = 'missing-fields' | 'initial' | 'email-verify';

type State = { formState: FormState };

type Action = { type: 'SWITCH_FORM'; payload: FormState };

export const initialState: State = {
  formState: 'initial',
};

export function getFormStateAction(state: FormState): Action {
  return {
    type: 'SWITCH_FORM',
    payload: state,
  };
}

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case 'SWITCH_FORM':
      return {
        ...state,
        formState: payload,
      };
  }

  return state;
}
