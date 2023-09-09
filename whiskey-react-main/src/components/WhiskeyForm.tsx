import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTeamName, chooseCharacter1, chooseCharacter2, chooseCharacter3 } from "../redux/slices/RootSlice"

interface WhiskeyFormProps {
  id?: string[];
  onClose: () => void;
}

const WhiskeyForm = ( props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseTeamName(data.team_name));
      dispatch(chooseCharacter1(data.character_1));
      dispatch(chooseCharacter2(data.character_2));
      dispatch(chooseCharacter3(data.character_3));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="team_name">Team Name</label>
          <Input {...register('team_name')} name='team_name' placeholder="Team Name" />
        </div>
        <div>
          <label htmlFor="character_1">Character 2</label>
          <Input {...register('character_1')} name='character_1' placeholder="Character 1" />
        </div>
        <div>
          <label htmlFor="character_2">Character 2</label>
          <Input {...register('character_2')} name='character_2' placeholder="Character 2" />
        </div>
        <div>
          <label htmlFor="character_3">Year Made</label>
          <Input {...register('character_3')} name='character_3' placeholder="Character 3" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm