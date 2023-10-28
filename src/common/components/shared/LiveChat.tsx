import { TextInput } from 'flowbite-react';
import { DUMMY_DATA } from 'src/common/constants';
import { CustomButton } from '../ui/Buttons/CustomButton';
import Message from './Message';

const message: string = `The 22-year-old reported to England's St George's Park base
on Monday for medical assessments despite Arsenal boss
Mikel Arteta insisting Saka was unavailable.`;

function LiveChat() {
  return (
    <div className=" py-6 px-4 overflow-hidden relative">
      <div className="">
        <h3 className="mb-3 uppercase font-semibold">Live Chat</h3>
      </div>

      <div className="mb-16 overflow-y-auto">
        {DUMMY_DATA.map((item, index) => (
          <Message
            key={index}
            name="Alex Jonah"
            username="@alexjonah"
            time="5h ago"
            message={message}
            numberOfComments="23"
            numberOfLikes="2k">
            {DUMMY_DATA.map((reply, index) => (
              <Message
                key={index}
                name="Alex Jonah"
                username="@alexjonah"
                time="5h ago"
                message={message}
                showBorderTop={false}
                numberOfComments="23"
                numberOfLikes="2k"></Message>
            ))}
          </Message>
        ))}
      </div>
      <div className="flex pt-[100px] absolute left-0 bottom-0 w-full">
        <div className="my-auto w-full">
          <TextInput placeholder="What’s your prediction" />
        </div>
        <CustomButton
          text="Post"
          rounded={false}
          filled
          className="text-white"
        />
      </div>
    </div>
  );
}

export default LiveChat;
