import { useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Result = () => {

  const { emailsData } = useSelector((state) => state?.emailLoad);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">

      <p className='!text-orange-500 !text-center !font-bold !text-lg !mt-5 lato-regular tracking-wider'>Scrapped Emails Table</p>

      {emailsData ? <TableContainer className='!m-10 !mb-0 overflow-auto'>

        <Table variant="simple">

          <TableCaption>End of Table</TableCaption>

          <Thead>
            <Tr>
              <Th isNumeric className='!text-orange-400 !text-center lato-regular'>Serial Number</Th>
              <Th className='!text-orange-400 !text-center lato-regular'>Emails</Th>
            </Tr>
          </Thead>

          {emailsData.map((email, index) => (
            <Tbody>
              <Tr>
                <Td className='!text-orange-600 !text-center !font-bold lato-regular lato-regular'>{index + 1}</Td>
                <Td className='!text-orange-600 !text-center !font-bold lato-regular lato-regular'>{email}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>

      </TableContainer> : <p className='text-center mt-4 text-xl tracking-wider lato-regular text-orange-500'>
        No Emails to Show from this Tab
      </p>}

      <button
        onClick={() => navigate('/')}
        className='py-2 px-4 mt-4 mb-10 font-bold rounded-xl shadow-xl bg-orange-600 text-white text-base tracking-wider'
      >
        Back to Previous Page
      </button>

    </div>
  );
};

export default Result;
