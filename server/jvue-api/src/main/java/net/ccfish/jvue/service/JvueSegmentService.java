/*
 * Copyright © 2013-2017 BLT, Co., Ltd. All Rights Reserved.
 */

package net.ccfish.jvue.service;

import java.util.List;

import net.ccfish.jvue.model.JvueSegment;

/**
 * 
 * @author 袁贵
 * @version 1.0
 * @since 1.0
 */
public interface JvueSegmentService extends _AbstractService<JvueSegment, Integer> {

    /**
     * @param menuId
     * @return
     * @since  1.0
     */
    List<JvueSegment> findByMenu(Integer menuId);

}
