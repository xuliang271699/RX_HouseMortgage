package com.rx_housemortgage.share;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.rx_housemortgage.R;
import com.umeng.socialize.ShareAction;
import com.umeng.socialize.UMShareAPI;
import com.umeng.socialize.UMShareListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import com.umeng.socialize.media.UMWeb;

public class QQAndSinaShareActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qqand_sina_share);

        String title = getIntent().getStringExtra(ACTION_TITLE);
        String cotnent = getIntent().getStringExtra(ACTION_CONTENT);
        String url = getIntent().getStringExtra(ACTION_URL);


        UMWeb web = new UMWeb(url);
        web.setTitle(title);//标题
//        web.setThumb(thumb);  //缩略图
        web.setDescription(cotnent);//描述

        new ShareAction(this)
                .setPlatform(getIntent().getIntExtra(ACTION_TYPE, INTENT_QQ) == INTENT_QQ ? SHARE_MEDIA.QQ : SHARE_MEDIA.SINA)//传入平台
                .withMedia(web)
                .setCallback(new UMShareListener() {
                    @Override
                    public void onStart(SHARE_MEDIA share_media) {

                    }

                    @Override
                    public void onResult(SHARE_MEDIA share_media) {

                        Toast.makeText(QQAndSinaShareActivity.this, "成功了", Toast.LENGTH_LONG).show();
                        QQAndSinaShareActivity.this.finish();
                    }

                    @Override
                    public void onError(SHARE_MEDIA share_media, Throwable throwable) {

                    }

                    @Override
                    public void onCancel(SHARE_MEDIA share_media) {
                        QQAndSinaShareActivity.this.finish();
                    }
                })//回调监听器
                .share();


    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
    }


    public static int INTENT_QQ = 1;
    public static int INTENT_SINA = 2;

    public static String ACTION_TYPE = "ACTION_TYPE";
    public static String ACTION_TITLE = "ACTION_TITLE";
    public static String ACTION_CONTENT = "ACTION_CONTENT";
    public static String ACTION_URL = "ACTION_URL";

    public static void run(Context context, int action, String title, String content, String url) {
        Intent intent = new Intent(context, QQAndSinaShareActivity.class);
        intent.putExtra(ACTION_TYPE, action);
        intent.putExtra(ACTION_TITLE, title);
        intent.putExtra(ACTION_CONTENT, content);
        intent.putExtra(ACTION_URL, url);
        context.startActivity(intent);
    }

}
