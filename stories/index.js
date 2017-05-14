import React from 'react';
import {graphql, compose} from "react-apollo";
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import EditCardForm from "../src/cards/EditCardForm";
import formState from "../src/cards/formState";
import editCardMutation from "./graphql/editCardMutation";
import getCardQuery from "./graphql/getCardQuery";

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf("Card Form", module)
    .add("Without State", () => (
        <EditCardForm data={{
                id: 5,
                title: "Hello World",
            }} onChange={action("Changed")} onSubmit={action("Submitted")}/>
    ))
    .add("With state", () => {
        const StateForm = formState(EditCardForm);
        return (
            <StateForm data={{
                    card: {
                        id: 6,
                        title: "YOYO",
                    },
                    loading: false,
                }} mutate={action("Mutate")}/>
        );
    });
