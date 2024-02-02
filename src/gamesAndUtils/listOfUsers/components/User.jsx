import plus from "./plus.svg";
import minus from './minus.svg'

function User({ id, avatar, first_name, last_name, email, isInvited, onClickInvite }) {
  return (
    <>
      <div className="bg-green-600 w-96 rounded-inputRounded">
        <div className="flex items-center justify-between">
          <img src={avatar} alt="persone" className="rounded-inputRounded" />
          <div>
            <h3>{first_name} {last_name}</h3>
            <p>{email}</p>
          </div>
          <img onClick={() => onClickInvite(id)} src={isInvited ? minus : plus} alt="plus" className="w-10 hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default User;
