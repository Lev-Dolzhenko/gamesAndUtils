import noTasks from './../noTasks.png'

function Cover() {
  return (
    <div className="border-t border-t-colorBorderCover mt-6 text-colorBorderCover">
      <div className="flex items-center flex-col gap-y-4 py-8 px-6">
        <div>
          <img src={noTasks} alt="no tasks" />
        </div>
        <div>
          <p>Let's to do something incredible</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
