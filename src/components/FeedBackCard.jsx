import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Chip,
    Box,
    CardMedia,
} from "@mui/material";

const FeedbackCard = ({
    id,
    courseName,
    userName,
    userImage,
    rating,
    feedbackText,
    imgsrc,
}) => {
    return (
        <Card sx={{ minWidth: 300, margin: 2 }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <Avatar src={userImage} alt={userName} sx={{ mr: 2 }} />
                    <Typography variant="subtitle1">{userName}</Typography>
                </Box>
                <Chip
                    sx={{ mb: 1 }}
                    label={`Rating: ${rating}/5`}
                    color="primary"
                    size="small"
                />
                <Typography variant="body2" color="text.secondary">
                    {feedbackText}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ margin: 2 }}
                component="img"
                height="194"
                image={imgsrc}
                alt={"صورة الكورس"}
            />
        </Card>
    );
};

export default FeedbackCard;
