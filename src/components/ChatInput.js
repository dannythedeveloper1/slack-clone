import React from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import { enterRoom } from "../features/appSlice";
const ChatInput = ({ channelName, channelId }) => {
    const sendMessage = (e) => {
        e.preventDefault();
    }
	return (
		<ChatInputContainer>
			<form>
				<input type="text" placeholder={`Message #room`} />
				<Button hidden type="submit" onClick={sendMessage}>Send</Button>
			</form>
		</ChatInputContainer>
	);
};

export default ChatInput;

const ChatInputContainer = styled.div``;
