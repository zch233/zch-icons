// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZhihuSquareFilledSvg from 'icon-base/es/asn/ZhihuSquareFilled';

export interface ZhihuSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconZhihuSquareFilled: ZhihuSquareFilledIconType = (props, context) => (
    <Icon name='ZhihuSquareFilled' {...{ ...props, ...context.attrs }} icon={ZhihuSquareFilledSvg} />
);

IconZhihuSquareFilled.displayName = 'IconZhihuSquareFilled';

export default IconZhihuSquareFilled;
