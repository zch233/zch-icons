// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagFilledSvg from 'icon-base/es/asn/TagFilled';

export interface TagFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTagFilled: TagFilledIconType = (props, context) => <Icon name='TagFilled' {...{ ...props, ...context.attrs }} icon={TagFilledSvg} />;

IconTagFilled.displayName = 'IconTagFilled';

export default IconTagFilled;
