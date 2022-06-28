// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZhihuOutlinedSvg from 'gupo-icons-base/es/asn/ZhihuOutlined';

export interface ZhihuOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconZhihuOutlined: ZhihuOutlinedIconType = (props, context) => <Icon name='ZhihuOutlined' {...{ ...props, ...context.attrs }} icon={ZhihuOutlinedSvg} />;

IconZhihuOutlined.displayName = 'IconZhihuOutlined';
IconZhihuOutlined.theme = 'outlined';
IconZhihuOutlined.originName = 'zhihu';

export default IconZhihuOutlined;
