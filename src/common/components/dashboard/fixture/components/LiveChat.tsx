import { Button, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { DUMMY_DATA } from 'src/common/constants';
import Message from '../../../shared/Message';

const message: string = `The 22-year-old reported to England's St George's Park base
on Monday for medical assessments despite Arsenal boss
Mikel Arteta insisting Saka was unavailable.`;

function LiveChat() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleTextArea = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="px-4 pt-6 pb-2  bg-white">
      <div className="">
        <div className="">
          <h3 className="mb-3 uppercase font-semibold">Live Chat</h3>
        </div>

        <div
          className={` ${
            isHidden ? 'mb-16' : 'mb-20'
          }  max-h-[60vh] overflow-y-auto border-b-2 border-neutral-20 `}>
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
                  numberOfLikes="2k"
                  isReply
                />
              ))}
            </Message>
          ))}
        </div>
        <div className={`flex ${!isHidden && 'pt-[170px]'}  relative w-full`}>
          <div className="mx-auto absolute bottom-1 left-2 w-[95%] bg-neutral-100">
            {isHidden ? (
              <TextInput
                onFocus={toggleTextArea}
                type="text"
                className=" w-[90%] bg-neutral-100"
                placeholder="What’s your prediction"
                style={{
                  height: 48,
                  borderRadius: 0,
                }}
              />
            ) : (
              <Textarea
                onBlur={toggleTextArea}
                className=" focus:ring-0 bg-neutral-100 "
                id="comment"
                placeholder="What’s your prediction"
                rows={7}
                cols={30}
                style={{
                  // height: 48,
                  marginBottom: '50px',
                  borderRadius: 0,
                  border: 'none',
                  outline: 'none',
                }}
              />
            )}

            <Button
              className="absolute bottom-0 right-0 p-4"
              color="failure"
              style={{
                height: 48,
                borderRadius: 0,
              }}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveChat;
