package com.p.Exporter.util;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;

public class UtilityTest {
    @Test
    public void test1() throws JSONException {
        Utility.toMap(new JSONObject());
    }

    @Test
    public void test2() throws JSONException {
        JSONObject obj=new JSONObject();
        obj.put("name","prems");
        JSONArray array=new JSONArray();
        array.put(123);
        obj.put("arr",array);
        obj.put("obj",new JSONObject());
        Utility.toMap(obj);
    }
}
