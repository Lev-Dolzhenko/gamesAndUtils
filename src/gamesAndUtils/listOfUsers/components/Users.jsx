import User from "./User";

function Users({
  items,
  handleSearchVal,
  searchVal,
  onClickInvite,
  invites,
  onClickSendInvites,
}) {
  return (
    <div className="bg-colorBgItem p-8 rounded-inputRounded flex flex-col gap-y-2">
      <div>
        <input
          value={searchVal}
          onChange={handleSearchVal}
          type="text"
          placeholder="find user"
          className="bg-white w-96 rounded-inputRounded p-2"
        />
      </div>
      <div>
        {items
          .filter((item) => {
            const fullName = (item.first_name + item.second_name).toLowerCase();
            return (
              fullName.includes(searchVal) ||
              item.email.toLowerCase().includes(searchVal)
            );
          })
          .map((item) => (
            <User
              onClickInvite={onClickInvite}
              isInvited={invites.includes(item.id)}
              key={item.id}
              {...item}
            />
          ))}
      </div>
      <div>
        {invites.length > 0 && (
          <button
            onClick={() => onClickSendInvites()}
            className="bg-white w-96 rounded-inputRounded p-2 hover:bg-slate-300 transition-colors"
          >
            Send invite
          </button>
        )}
      </div>
    </div>
  );
}

export default Users;
