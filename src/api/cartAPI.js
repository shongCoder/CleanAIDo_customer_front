import axios from 'axios';

const host = 'http://10.10.10.148:8080/api/v1/cart'

export const getCartList = async () => {

    console.log("getCartList Start!!")
    try {
        const customerId = "customer0@aaa.com";
        console.log(`${host}/list`)
        const res = await axios.get(`${host}/list`, {
            params: { customerId: customerId }
        });
        console.log(res)
        return res.data;
    } catch (error) {
        console.log(error)
        console.error('Error fetching cart list:', error);
        throw error; // 필요 시 에러를 다시 던집니다.
    }

}

export const deleteCart = async (cdno) => {

    console.log("deleteCart start");
    const res = await  axios.delete(`${host}`,{
        params:{cdno: cdno}
    })
    return res.data

}

export const updateQty = async (id, quantity) => {
    console.log("updateQty start");

    const formData = new FormData();
    formData.append('cdno', id);
    formData.append('quantity', quantity);

    const res = await axios.put(`${host}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return res.data;
}