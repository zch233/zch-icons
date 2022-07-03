// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddTwotoneSvg from 'icons-base/es/asn/FileAddTwotone';

export interface FileAddTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileAddTwotone: FileAddTwotoneIconType = (props, context) => (
    <Icon name='FileAddTwotone' {...{ ...props, ...context.attrs }} icon={FileAddTwotoneSvg} />
);

IconFileAddTwotone.displayName = 'IconFileAddTwotone';
IconFileAddTwotone.theme = 'twotone';
IconFileAddTwotone.originName = 'file-add';

export default IconFileAddTwotone;
