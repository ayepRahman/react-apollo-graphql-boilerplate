import React from 'react';
import { Icon, Checkbox } from 'antd';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/react-hooks';
import FullPageLoader from 'app/components/Loaders/FullPageLoader';
import Divider from 'app/components/Divider/Divider';
import { GET_TODOS, DELETE_TODO, UPDATE_TODOS } from './gql';

const EmptyContainer = styled.div`
  display: flex;
`;

const EmptyNumber = styled.div`
  color: ${p => p.theme.colors.primary};
  text-decoration: underline;
  padding: 0 0.4rem;
`;

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListsLeftAppendix = styled.div`
  display: flex;
`;

const ListsRightAppendix = styled.div`
  cursor: pointer;

  svg {
    &:hover {
      fill: #ff4161;
    }
  }
`;

const ListsContent = styled.div<IListsContent>`
  padding-left: 1rem;
  text-decoration: ${p => p.checked && 'line-through'};
`;

const DeleteIcon = ({ id, refetch }: { id: string; refetch: () => any }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, { refetchQueries: [{ query: GET_TODOS }] });
  const handleDelete = async () => {
    try {
      await deleteTodo({ variables: { id } });
      await refetch();
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return <Icon type="delete" onClick={handleDelete} />;
};

const UpdateCheckbox = ({ todo }: { todo: { id: string; task: string; checked: boolean } }) => {
  const [updateTodos] = useMutation(UPDATE_TODOS, { refetchQueries: [{ query: GET_TODOS }] });
  const handleChecked = (event: any, todo: object) => {
    console.log('handleChecked', { event, todo });

    updateTodos({
      variables: {
        ...todo,
        checked: event.target.checked,
      },
    });
  };

  return (
    <Checkbox
      name="checked"
      checked={todo.checked}
      onChange={event => handleChecked(event, todo)}
    />
  );
};

const ListsTodos = () => {
  const { loading, error, data, refetch } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <FullPageLoader />;
  if (error) return <div style={{ color: '#fafafa' }}>{JSON.stringify(error)}</div>;
  return (
    <>
      {data.getTodos && data.getTodos.length ? (
        data.getTodos.map((todo: { id: string; task: string; checked: boolean }, index: number) => {
          return (
            <React.Fragment key={index}>
              <ListsContainer>
                <ListsLeftAppendix>
                  <UpdateCheckbox todo={todo} />
                  <ListsContent checked={todo.checked}>{todo.task}</ListsContent>
                </ListsLeftAppendix>
                <ListsRightAppendix>
                  <DeleteIcon id={todo.id} refetch={refetch} />
                </ListsRightAppendix>
              </ListsContainer>
              <Divider />
            </React.Fragment>
          );
        })
      ) : (
        <EmptyContainer>
          You currrently have <EmptyNumber> 0 </EmptyNumber> task ! Add some more . . .
        </EmptyContainer>
      )}
    </>
  );
};

interface IListsContent {
  checked?: boolean;
}

export default ListsTodos;
