import { Card, CardContent, Typography} from "@mui/material";
function deleteCourse(id) {}
function updateCourse(id) {}
const AdminCourseCard = ({ id, name, price, content, imgsrc }) => {
    return (
        <Card sx={{ minWidth: 500, height: 230, display: "flex" , ml: 3}}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Course ID: {id}teCo
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${price ? price.toFixed(2) : ''}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Content: {content ? content.substring(0, 50) : ''}...
                </Typography>
                <button
                    onClick={() => deleteCourse(id)}
                    className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 "
                >
                    Delete
                </button>
                <button
                    onClick={() => updateCourse(id)}
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
                >
                    Update
                </button>
            </CardContent>
            <div className="w-1/2 p-3 rounded-md">
                <img src={imgsrc} alt="صورة الكورس" />
            </div>
        </Card>
        
        
    );
};
export default AdminCourseCard;
