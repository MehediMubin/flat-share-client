import MyFlatPosts from "@/components/MyFlatPosts";
import MyFlatRequests from "@/components/MyFlatRequests";
import MyProfile from "@/components/MyProfile";

const ProfilePage = () => {
   return (
      <div>
         <MyProfile />
         <MyFlatPosts />
         <MyFlatRequests />
      </div>
   );
};

export default ProfilePage;
