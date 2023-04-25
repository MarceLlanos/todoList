import { Divider } from '@mui/material';
import { FrameDashboard, PaperTodo } from '../../components';
import { HeadTitle } from '../../styledComponents';

import { Subtitle } from '../../styledComponents/SubTitle.styled.component';

import './styles/InboxPage.css';

export interface InboxPageProps {}

const InboxPage: React.FC<InboxPageProps> = () => {
	return (
		<FrameDashboard>
			<HeadTitle>Inbox</HeadTitle>
			<div className='mt-3 mb-2'>
				<Subtitle>Overdue</Subtitle>
				<Divider />
				<PaperTodo />
			</div>
			<div className='mt-3'>
				<Subtitle>Today</Subtitle>
				<Divider />
				<PaperTodo />
			</div>
		</FrameDashboard>
	);
};

export default InboxPage;
