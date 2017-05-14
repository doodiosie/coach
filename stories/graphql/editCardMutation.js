import gql from "graphql-tag";

export default gql`
mutation editCard (
  $id: Int!,
  $record: CardInput!
) {
  editCard (
    id: $id,
    record: $record
  ) {
    id
    title
    questionText
    answerText
  }
}
`;
