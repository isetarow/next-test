import Layout from "../components/Layout";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme
} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: '1.5rem'
        },
        bridalYm: {
            width: '100%',
            maxWidth: '300px'
        },
        tableHead: {
            '&>th': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.common.white
            }
        },
        tableCell: {
            padding: '2px 4px'
        },
        tableRow: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        }
    }),
);

const BridalSchedule = () => {
    const classes = useStyles()
    const [state, setState] = React.useState<{ bridalYm: string | unknown }>({
        bridalYm: ''
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
        setState({
            bridalYm: event.target.value,
        });
    };

    return (
        <Layout title="ブライダル予定表参照">
            <Paper>
                <Box p={1}>
                    <Box>
                        <FormControl className={classes.bridalYm}>
                            <InputLabel htmlFor="bridalYm">対象年月</InputLabel>
                            <Select
                                native
                                value={state.bridalYm}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'bridalYm',
                                    id: 'bridalYm',
                                }}
                            >
                                <option aria-label="None" value=""/>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={2} display="flex" justifyContent="space-between" maxWidth="400px">
                        <Button variant="contained" color="primary">検索</Button>
                        <Button variant="contained" color="primary">ダウンロード</Button>
                        <Button variant="contained" color="primary">送信</Button>
                    </Box>
                </Box>
            </Paper>
            <Box marginTop={2} >
                <Paper>
                    <TableContainer component={Paper} style={{maxHeight: "400px"}}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell className={classes.tableCell} style={{whiteSpace: "nowrap", minWidth: "200px"}}>ホテル・チャペル名</TableCell>
                                    <TableCell className={classes.tableCell} style={{whiteSpace: "nowrap", minWidth: "85px"}}>日付</TableCell>
                                    {[...Array(20)].map((_, k) =>
                                        <TableCell className={classes.tableCell} align="center">{k + 1}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[...Array(20)].map(() =>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell className={classes.tableCell}>ﾃﾞｨｱｽﾃｰｼﾞつくば（株式会社ﾌｪﾑ） ﾌｫﾚｽﾄﾃﾗｽ</TableCell>
                                        <TableCell className={classes.tableCell}>1 (木)</TableCell>
                                        {[...Array(20)].map((_, k) =>
                                            <TableCell className={classes.tableCell}>
                                                <Box display="flex" flexDirection="column">
                                                    <Box display="flex" justifyContent="center" style={{borderBottom: '1px solid'}}>13:00</Box>
                                                    <Box display="flex" flexDirection="row">
                                                        <Box style={{borderRight: '1px solid', paddingRight: '2px'}}>X.T</Box>
                                                        <Box style={{paddingLeft: '2px'}}>FVA</Box>
                                                    </Box>
                                                </Box>

                                            </TableCell>
                                        )}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </Layout>
    )
}

export default BridalSchedule