const app = express()

app.get("/home",(req,res)=>{
    res.send("Welcome from express")
})
const PORT = 3000
app.listen(PORT,()={
    console.log("server is running...");
})