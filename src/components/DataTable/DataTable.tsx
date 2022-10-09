import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import './style.css'

// GUIA PARA ESTILIZAÇÃO DO DATAGRID
// https://smartdevpreneur.com/the-ultimate-guide-to-customizing-material-ui-datagrid/#Row_Height



const handleCellClick = (param: any, event: any) => {
    console.log(param);
    console.log(event);
    if (param.colIndex === 2) {
        event.stopPropagation();
    }
};

const handleRowClick = (param: any, event: any) => {
    console.log("Row:");
    console.log(param);
    console.log(event);
};


const rows: GridRowsProp = [
    {
        id: 1,
        col1: 'Hello',
        col2: 'World',
    },
    {
        id: 2,
        col1: 'DataGridPro',
        col2: 'is Awesome'
    },
    {
        id: 3,
        col1: 'MUI',
        col2: 'is Amazing'
    },
    {
        id: 4,
        col1: 'MUI',
        col2: 'is Amazing'
    },
    {
        id: 5,
        col1: 'MUI',
        col2: 'is Amazing'
    },
];

const columns: GridColDef[] = [
    {
        field: 'col1',
        headerName: 'NOME',
        // width: 150,
        headerAlign: 'center',
        align: 'left',
        flex: 2, //descomentar em caso de largura fixa
        type: 'string',
        // renderCell: (cellValues) => {
        //     return (
        //         <div
        //             style={{
        //                 color: "blue",
        //                 fontSize: 18,
        //                 width: "100%",
        //                 textAlign: "right"
        //             }}
        //         >
        //             {cellValues.value}
        //         </div>
        //     );
        // }
    },
    {
        field: 'col2',
        headerName: 'TELEFONE',
        // width: 150,
        flex: 1,
        headerAlign: 'center',
        align: 'left',
        type: 'string'
    },
];


export default function DataTable() {
    return (
        <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
            {/* <div className="m-4">
                Os Filtros vão aqui
            </div> */}
            <DataGrid
                rows={rows}
                columns={columns}
                // checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                headerHeight={36}
                rowHeight={53}
                sx={{
                    boxShadow: 0,
                    border: 2,
                    color: '#b4b7bd',
                    // borderColor: 'rgba(0,0,0,0)',
                    borderLeft: 'none',
                    borderBlock: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    '& .MuiDataGrid-row:hover': {
                        background: '#343d55',
                    },
                    // "& .MuiDataGrid-virtualScrollerRenderZone": {
                    //     "& .MuiDataGrid-row": {
                    //         "&:nth-child(2n)": { backgroundColor: "#e5ff0047" }
                    //     },
                    // },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#343d55",
                        fontSize: 16,
                        fontWeight: 600,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: 'none',
                        "& .MuiTablePagination-root": {
                            color: 'rgb(222, 222, 222)',
                            // "& MuiTablePagination-actions": {
                            //     color: "'rgb(222, 222, 222)' !import",
                            // },
                        },
                    },
                    gridRow: {
                        // color: 'red'
                        // borderInlineColor: 'red'
                    },
                    '&>.MuiDataGrid-main': {
                        '&>.MuiDataGrid-columnHeaders': {
                            borderBottom: 'none',
                            // borderBottomColor: 'red',
                            fontFamily: 'Montserrat, Helvetica sans-serif',
                            color: 'rgb(222, 222, 222)',
                            fontSize: 14
                        },
                        '& div div div div >.MuiDataGrid-cell': {
                            // borderBottom: 'red',
                            borderColor: 'rgb(104, 104, 104)'
                        }
                    },
                }}
            />
        </div>
    );
}