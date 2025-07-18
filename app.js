const liffId = "2007752050-JX5pRvrz";

async function main() {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }



    const profile = await liff.getProfile();
    const accessToken = await liff.getAccessToken();



    document.getElementById("userId").innerText = `User ID: ${profile.userId}`;
    document.getElementById("userName").innerText = `User Name: ${profile.displayName}`;
    document.getElementById("userStatus").innerText = `User Status: ${profile.statusMessage}`;
    document.getElementById("accessToken").innerText = `Access Token: ${accessToken}`;

    if (profile.userId == "Udc176173617583df213e82f5bcdf61c2")
    {
        document.getElementById("verify").innerText = `Access Token: True`;
    }
    else
    {
        document.getElementById("verify").innerText = `Access Token: False`;
    }


    console.log(profile);
}

function closeLiff() {
    liff.closeWindow();
}

main();