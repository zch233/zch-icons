// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagOutlinedSvg from 'gupo-icons-base/es/asn/TagOutlined';

export interface TagOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagOutlined: TagOutlinedIconType = (props, context) => <Icon name='TagOutlined' {...{ ...props, ...context.attrs }} icon={TagOutlinedSvg} />;

IconTagOutlined.displayName = 'IconTagOutlined';
IconTagOutlined.theme = 'outlined';
IconTagOutlined.originName = 'tag';

export default IconTagOutlined;
