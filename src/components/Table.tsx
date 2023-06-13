import { useState } from "react";
import { actionCreators, useAppDispatch, useAppSelector } from "../state";
import styled, { keyframes, css } from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";

const keyframesShimmer = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

const shimmerAnimation = css`
  background: linear-gradient(
    to right,
    #E6E6E6 35%,
    #F2F2F2 50%,
    #E6E6E6 65%
  );
  background-size: 200% 100%;
  animation: ${keyframesShimmer} 1s infinite linear;
`;

export const LoadingBlock = styled.div`
  ${shimmerAnimation}
`;
const Container = styled.div`
    width: 100%;
    padding: 2.5rem;
    overflow-x:auto;
    box-sizing: border-box;
`;
const Heading = styled.h1`
    font-size: 48px;
    font-weight: 400;
    line-height: 70px;
    color: #292c3e;;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    max-height: 500px;
    border-radius: 8px;
    padding: 40px;
    box-sizing: border-box;
    overflow-x: auto;
`;

const TableContainer = styled.div`
    overflow-y: visible; overflow-x: scroll; width: 100%;
`
export const UITable = styled.table`
width:100%;
td,
th {
    padding: 6px;
}

td {
    text-align: center;
height:40px;

}


tr:nth-child(even) {
    background-color: #eee;
}

th[scope='col'] {
    background-color: #648be5;
    color: #fff;
    width:20%;
}

caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 14px;
    text-align:center;
}
thead th{
    top:0;
    position:sticky;
    z-index:10;
}
`

export const Table: React.FC = () => {
    const [searchableWord, setsearchableWord] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [limit, setLimit] = useState<number>(10);

    const dispatch = useAppDispatch();
    const { data, error, loading } = useAppSelector(state => state.reducers.repositories);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setLimit(10);
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(searchableWord, limit, country));

    }
    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = document.getElementById('scro') as HTMLElement;
        let lastScrollTop = 0;
        element.onscroll = (e: Event) => {
            if (element.scrollTop < lastScrollTop) {
                // upscroll 
                return;
            }
            lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
            let scroll = (element.scrollTop + element.offsetHeight) + 10;
            if (scroll >= element.scrollHeight) {
                setLimit(prev => prev + 10);
                dispatch(actionCreators.searchRepositories(searchableWord, limit + 10, country));
            }
        }
    };
    console.log('Error is: ', error);
    return <div>
        <form onSubmit={onSubmit}>
            <Header word={searchableWord} setWord={setsearchableWord} countryName={country} setCountryName={setCountry}></Header>
        </form>
        <Container>
            <Heading>Media Library</Heading>
            <Main>
                {loading ? (
                    <>
                        <TableContainer id='scro' onScroll={handleScroll}>

                            <UITable style={{ width: '80%' }}>
                                <thead>
                                    <tr>
                                        <th><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></th>
                                        <th><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></th>
                                        <th><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></th>
                                        <th><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <tr key={`${index}-item`}>
                                            <td><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></td>
                                            <td><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></td>
                                            <td><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></td>
                                            <td><LoadingBlock style={{ height: '24px', width: '200px' }}></LoadingBlock></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </UITable>
                        </TableContainer>
                    </>
                ) : (
                    <>
                        {data && data[0]?.results.length ?
                            (
                                <TableContainer id='scro' onScroll={handleScroll}>
                                    <UITable>
                                        <thead>
                                            <tr>
                                                <th scope="col">Collection Id</th>
                                                <th scope="col">Artist Name</th>
                                                <th scope="col">Collection Name</th>
                                                <th scope="col">Track Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data[0]?.results?.map((course: any) => {
                                                return <tr key={`${course?.artistName}-${Math.random() * 100}`}>
                                                    <td>{course?.collectionId}</td>
                                                    <td>{course?.artistName}</td>
                                                    <td>{course?.collectionName}</td>
                                                    <td>{course?.trackName}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </UITable>
                                </TableContainer>

                            ) : (<p>There's no data available</p>)}
                    </>
                )}
            </Main>
        </Container>
        <Footer />
    </div>
}