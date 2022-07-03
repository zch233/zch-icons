// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagFilledSvg from 'icons-base/es/asn/TagFilled';

export interface TagFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagFilled: TagFilledIconType = (props, context) => <Icon name='TagFilled' {...{ ...props, ...context.attrs }} icon={TagFilledSvg} />;

IconTagFilled.displayName = 'IconTagFilled';
IconTagFilled.theme = 'filled';
IconTagFilled.originName = 'tag';

export default IconTagFilled;
