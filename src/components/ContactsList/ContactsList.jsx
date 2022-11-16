import { List, Item, Text, Link, Btn } from './ContactsList.styled';
import { ReactComponent as DelIcon } from '../icons/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List component="ul">
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text component="ul">
              {name}: <Link href={`tel:${number}`}>{number}</Link>
            </Text>
            <Btn
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              <DelIcon width="40" height="40" fill="black" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
