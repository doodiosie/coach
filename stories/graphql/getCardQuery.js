import gql from "graphql-tag";

export default gql`
query getCard (
  $id: Int!
) {
  card (
    id: $id
  ) {
    id
    title
    questionText
    answerText
  }
}
`;
